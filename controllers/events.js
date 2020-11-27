const { response } = require('express');
const Eventos = require('../models/Eventos');

const getEventos = async(req, res = response ) => {

    const eventos = await Eventos.find()
                                 .populate('user','name');

    res.json({
        ok: true,
        eventos
    })
}

const crearEvento = async(req, res = response ) => {

    const evento = new Eventos( req.body );


    try {
        
        evento.user = req.uid;

        const eventoGuardado = await evento.save()
        
        res.json({
            ok: true,
            evento: eventoGuardado
        })

    } catch (error) {
        
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

const actualizarEvento = async(req, res = response) => {

    const eventoId = req.params.id;
    const uid = req.uid;

    try {

        const evento = await Eventos.findById( eventoId )

        if ( !evento ) {
            return res.status(404).json({
                ok: false,
                msg: 'Evento no existe con ese ID'
            });
        }

        if ( evento.user.toString() !== uid ) {
            return res.status(401).json({
                ok: false,
                msg: 'No tiene provilegio de editar este evento'
            });
        }

        const nuevoEvento = {
            ...req.body,
            user: uid
        }

        const eventoActualizado = await Eventos.findByIdAndUpdate( eventoId, nuevoEvento, { new: true } );

        res.json({
            ok: true,
            evento: eventoActualizado
        });
        
    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }    
}

const eliminarEvento = async(req, res = response ) => {

    const eventoId = req.params.id;
    const uid = req.uid;

    try {

        const evento = await Eventos.findById( eventoId )

        if ( !evento ) {
            return res.status(404).json({
                ok: false,
                msg: 'Evento no existe con ese ID'
            });
        }

        if ( evento.user.toString() !== uid ) {
            return res.status(401).json({
                ok: false,
                msg: 'No tiene provilegio de eliminar este evento'
            });
        }

        await Eventos.findByIdAndDelete( eventoId );

        res.json({ ok: true, msg: 'Evento eliminado' });
        
    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }    
}


module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}